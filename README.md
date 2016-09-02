# froala-lorem-plugin
A Froala Editor plugin for inserting lorem ipsum text.

##Installation##

###Install Froala Editor###
Get Froala Editor up and running according to the latest instructions here: https://www.froala.com/wysiwyg-editor/docs

###Add the Plugin Script###
Add the script tag to the plugin after jQuery and the main froala js file and before you intialize Froala (below).

    <script type="text/javascript" src="js/froala-lorem.plugin.js"></script>

##Usage##

###Initialize Froala with the new plugin defined###
Add the following before the closing body tag. Note the "loremDropdown" in toolbarButtons.

    $(function() {
        $('textarea.froala').froalaEditor({
            toolbarButtons: [
                'bold', 'italic', 'underline', 'paragraphFormat', 'formatOL',
                'formatUL', 'insertHTML', 'undo', 'redo', 'html','loremDropdown'
            ],
            quickInsertButtons: ['image', 'table', 'ul', 'ol', 'hr']
        });
      });


####Credits####
Thanks to the following sites for providing the Ipsum text used in this plugin.

Standard: http://www.lipsum.com/

Beer: http://random-ize.com/lorem-ipsum-generators/beer/

Star Wars: http://star-wars-ipsum.herokuapp.com/

Samuel L.: http://slipsum.com/

Veggie: http://veggieipsum.com/

Bacon: http://baconipsum.com/

