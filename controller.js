
root_request = (req, res) => {
  return res.status(200).send({
    message:'You have requested the imager service. Upload your images onto the server using this service',
    version: '0.0.1'
  });
}

get_image = (req, res) => {}

get_images = (req, res) => {}

upload_image = (req, res) => {}

update_image = (req, res) => {}

remove_image = (req, res) => {}

image_not_found = (req, res) => {}

function Compressor () {
  return {
    compress: ( input ) => {
      return input;
    },
    decompress: ( input ) => {
      return input;
    },
    validate: ( input ) => {
      return true;
    }
  }
}

module.exports = {
  root_request,
  get_image,
  get_images,
  upload_image,
  update_image,
  remove_image,
  image_not_found
};
