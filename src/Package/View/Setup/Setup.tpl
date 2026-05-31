{{$register = Package.Raxon.Photoviewer:Init:register()}}
{{if(!is.empty($register))}}
{{Package.Raxon.Photoviewer:Import:role.system()}}
{{$flags = flags()}}
{{$options = options()}}
{{Package.Raxon.Photoviewer:Main:install($flags, $options)}}
{{/if}}