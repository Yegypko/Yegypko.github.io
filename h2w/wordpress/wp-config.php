<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'html2wordpress');

/** MySQL database username */
define('DB_USER', 'master');

/** MySQL database password */
define('DB_PASSWORD', 'w1Sb6Jg2gOfQx2Ns');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Hz<g(L$sdV(D~OUzBq+$HhcqpnBuv 3Z^49avRXo:@n+%@j [:pOq)!yN<d3[ IB');
define('SECURE_AUTH_KEY',  '23b1[uyxqQ-+ImFbMzl31(OH8ix.!qLX-9LIfJ-&dN@ufq;]4jyLv5gx>`X*Q|]^');
define('LOGGED_IN_KEY',    '({ITkw3IN[!3<;yxTJ>ydY`w{{o1$4AIkC<I2dKuEHpZ=jg/u[!83|]gc~L3glbO');
define('NONCE_KEY',        '#vh*vo_^;3{$Q[? !BI)LtU0;VGa}V7f6b+DgPBEn!&)BSKqRG}V+ekwNk79]R@t');
define('AUTH_SALT',        'eqP|D6|_87Fq[j1Q<g 7y5]0&&.}q*ts//EU~|9NDJyMpu1m/yoq{ECY@]0d-;ap');
define('SECURE_AUTH_SALT', '^ x3FD As-E[,v,MLZ3(lHE@Cv{6P8=9<Z&!vB,b5Jqm7Bon_AVA3Yi?UBvZCdnV');
define('LOGGED_IN_SALT',   'ED!h~L.Bz(,$9j4;2t9/zR%KO-+`&pYOo+L}!.~n6B1X,.|?q@a=.U.x(8V8jmI]');
define('NONCE_SALT',       '#:5Z:CVX2w4E>l9i@YvF[{,ATp.sQ$*#l4pJN9T4&KvSt6?=lRJ|gDv&+_s|u/95');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dbht_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
