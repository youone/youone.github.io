/**
 * Created by johan on 2016-09-25.
 */

System.import('jquery').then(function($) {
    $('#postcontent').append('hej');
    if (isMobile) $('#postcontent').append(' mobile');
    else $('#postcontent').append(' not mobile');


});