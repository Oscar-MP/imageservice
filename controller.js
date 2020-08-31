
root_request = (req, res) => {
  return res.status(200).send({
    message:'You have requested the imager service. Upload your images onto the server using this service',
    version: '0.0.1'
  });
}

get_image = (req, res) => {
  // Gets a single image that match with the given ID.
  const id = req.params.id;
}

get_images = (req, res) => {
  // Returns all the images stored. Only accessed by administrators
}

upload_image = (req, res) => {
  // Uploads a new image into the server
}

update_image = (req, res) => {
  // Updates an existing image
  const id = req.params.id;
}

remove_image = (req, res) => {
  // Removes an image from the server
  const id = req.params.id;
}

image_not_found = (req, res) => {
  // Returns a custom not found error
  return res.status(404).message({
    message: '¿Are you lost? There is no route like this one. Try something else.'
  });
}

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
