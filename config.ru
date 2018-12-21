require "rack"
require "rack/jekyll"

use Rack::Static,
  :urls => ["/assets/css/images", "/assets/css", "/assets/js", "/images"],
  :root => "_site"

use Rack::Deflater


run Rack::Jekyll.new
