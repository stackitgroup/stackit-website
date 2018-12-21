require "rack"
require "rack/jekyll"

use Rack::Static,
  :urls => ["/assets", "/images"],
  :root => "_site"

use Rack::Deflater


run Rack::Jekyll.new
