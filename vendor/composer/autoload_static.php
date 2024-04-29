<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit64cd833a706f27af14011a7e30dd7f53
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/fproject/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit64cd833a706f27af14011a7e30dd7f53::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit64cd833a706f27af14011a7e30dd7f53::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit64cd833a706f27af14011a7e30dd7f53::$classMap;

        }, null, ClassLoader::class);
    }
}