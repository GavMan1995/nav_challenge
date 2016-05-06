require 'open-uri'
class HomeController < ApplicationController
  before_action :rillow
  before_action :census

  def index
  end

  def answer
    state = params["state"]
    state_num = params["state_num"]
    zip = params["zip"]
    address = params["address"]
    city = params["city"]
    pop = "P0010001"

    census_fields = @census.where({ fields: pop, level: "ZCTA5:#{zip}", within: "STATE:#{state_num}" })
    population = census_fields.first[pop].to_i

    if population >= 1000 && population < 5000
      answer = "If you know how to fight you may survive"
      suggestion = "WE SUGGEST YOU STOCK UP!"
      webpage = "http://www.budk.com/zombie-survival-3536"
      color = "yellow-text"
    elsif population >= 5000
      answer = "YOU WILL NOT SURVIVE"
      suggestion = "WE SUGGEST YOU MOVE!!"
      webpage = "http://www.zillow.com/homes/for_sale/alaska_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy"
      color = "red-text"
    else
      answer = "it seems that you are safe"
      suggestion = "we still suggest that you prepare!"
      webpage = "http://www.amc.com/shows/the-walking-dead"
      color = "green-text"
    end

    zillow = @rillow.get_search_results("#{address}", "#{city}, #{state}")
    zillow.to_hash
    zestimate = zillow.find_attribute 'zestimate'
    if  zestimate == nil
      zestimate = false
    elsif zestimate != nil
      zestimate = zillow.find_attribute 'zestimate'
      zestimate = zestimate.first.first[1].first["content"].to_i
    end


    render json: {answer: answer, webpage: webpage, suggestion: suggestion, zestimate: zestimate, population: population, answer_color: color}
  end

  private

  def rillow
    @rillow = Rillow.new(ENV['ZWSID'])
  end

  def census
    @census = CensusApi::Client.new(ENV['CENSUS_KEY'], dataset: 'SF1')
  end

end
