class BlogImageUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick
  process :auto_orient

  # Rotate Image
  version :large do
    process :auto_orient,
    resize_to_fill: [1200, 400]
  end

  version :blog_index do
    process :auto_orient,
    resize_to_fill: [400, 200]
  end

  version :social_media do
    process :auto_orient,
    resize_to_fill: [600, 800]
  end

  version :thumb do
    process :auto_orient,
    resize_to_fill: [100, 100]
  end


  def auto_orient
    manipulate! do |image|
      image.tap(&:auto_orient)
    end
  end

  # Choose what kind of storage to use for this uploader:
   if Rails.env.production?
    storage :fog
  else
    storage :file
  end
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url(*args)
    # For Rails 3.1+ asset pipeline compatibility:
    ActionController::Base.helpers.asset_path("app/assets/images/blog_image.jpg")

  end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end
end
