if Rails.env.development? || Rails.env.test?
  config = "#{Rails.root}/config/census.yml"
  if File.exists? config
    census = YAML.load_file(config)
    census.each { |key, value| ENV[key] || ENV[key] = value.to_s }
  else
    raise "Missing file census.yml"
  end
end
