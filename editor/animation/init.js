//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                js: 'strInStr',
                python: 'str_in_str'
            }
        });
        io.start();
    }
);
