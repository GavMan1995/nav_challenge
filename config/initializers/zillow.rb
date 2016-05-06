if Rails.env.development? || Rails.env.test?
  config = "#{Rails.root}/config/zillow.yml"
  if File.exists? config
    zillow = YAML.load_file(config)
    zillow.each { |key, value| ENV[key] || ENV[key] = value.to_s }
  else
    raise "Missing file zillow.yml"
  end
end
