<?php
/**
 * Plugin Name:       New Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:          The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       new-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function new_block_new_block_block_init() {
    // Enqueue Font Awesome stylesheet
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' );
    
    // Register the block
    register_block_type( __DIR__ . '/build/icon-picker' );
}
add_action( 'init', 'new_block_new_block_block_init' );


function new_block_frontend_assets() {
    
    wp_enqueue_style('font-awesome', plugin_dir_url( __FILE__ ).'assets/css/all.min.css', array(), '1.0.0', true);
    wp_enqueue_script('font-js', plugin_dir_url( __FILE__ ).'assets/js/all.min.js', array(), '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'new_block_frontend_assets' ); 


function new_block_editor_assets() {
    
    wp_enqueue_style('font-awesome-editor', plugin_dir_url( __FILE__ ).'assets/css/all.min.css', array(), '1.0.0', true);
    
    
    wp_enqueue_script('font-awesome-js-editor', plugin_dir_url( __FILE__ ).'assets/js/all.min.js', array(), '1.0.0', true);
}
add_action( 'enqueue_block_editor_assets', 'new_block_editor_assets' );