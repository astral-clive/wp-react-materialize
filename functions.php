<?php

define("THEME_DIR", get_template_directory_uri());
/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');
 
// ENQUEUE STYLES
     
function enqueue_styles() {
     
    /** REGISTER css/screen.cs **/
    // wp_register_style( 'screen-style', THEME_DIR . '/css_path/screen.css', array(), '1', 'all' );
    // wp_enqueue_style( 'screen-style' );
         
}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
     
// ENQUEUE SCRIPTS
     
function enqueue_scripts() {
         
    /** REGISTER HTML5 OtherScript.js **/
    // wp_register_script( 'custom-script', THEME_DIR . '/js_path/customscript.js', array( 'jquery' ), '1', false );
    // wp_enqueue_script( 'custom-script' );
         
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

?>