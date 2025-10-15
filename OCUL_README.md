# OCUL Readme

## Starting the proxy

1. Run: `nvm use v22.12`
2. Run `npm run start:proxy`
3. Go to: http://localhost:4201/nde/home?vid=[your-view-code]&lang=en

### Note
- At the moment assets do not work with the proxy, so this can't be used to preview changes from src/assets (icons, custom.js, homepage, etc). See: https://github.com/ExLibrisGroup/customModule/issues/3

## Building your customization package
1. Ensure your instituion and view IDs are set in `build-settings.env`
2. Run: `npm run build`
3. Your view package (zip file) will be generated in the `dist` folder.
4. Upload this zip file under the Manage customization package tab for your view. 

## Customizing your institution's logo
### Procedure

1. Inside of your customization package, delete the existing logo file at `src/assetsimages/library-logo.png`
2. Replace this image with your own logo, also named `library-logo.png`

### Note
- Ensure that your logo file is a png image, with a .png extension
- Ensure that your image has a maximum width of 300 px, and a maximum height of 100 px.
    - When scaling your logo image, it's recommended to scale your image to fit the maximum width of 300px and let the software automatically calculate the resulting height. This will preserve the original aspect ratio of the logo file and avoid logo files that appear stretched or squished. 
- Ensure that your logo file does not exceed 30 KB in size. 

## Customizing your favicon

### Procedure
1. Copy your favicon in .ico format to your customization package under `src/assets/icons/favicon.ico`. 
2. Build and deploy your customization package for your view (see **Building your customization package** above)

### Note
- Please make sure that you match the file path and name exactly, as it will not work if they don't match. 

## [Optional] Customze link and button colours
### Procedure
    1. In your customization package, edit assets/css/custom.css
    2. Uncomment and customize the code under "Custom link and button colours"
    3. Edit the value of the `--omni-link-color` variable to your own colour. 

### Note
- Verify that your custom colour has sufficient colour contrast for WCAG 2.0 AA using the [WebAIM Colour Contrast Checker tool](https://webaim.org/resources/contrastchecker/).

## Customize your home page (new search page)
You can customize your home page by editing the `homepage_en.html` and `homepage.css` files in `src/assets/homepage`. 

`homepage_en.html` provides some commented examples of how you might add additional "cards" to the homepage in a set of content rows. There are CSS rules in `homepage.css` to linearize the multicolumn layout of these cards on smaller devices. 

By default, the home page styles will automatically use the styles provided by the theme that you choose. 

## Theme selection
Most of the predefined themes in the NDE UI seem like feasible choices. All seem to have sufficient contrast for links and buttons out of the box. 

It is recommended to avoid choosing the Brown or Charcoal themes as the link colour in those themes makes it difficult to discern links from regular text in the UI.