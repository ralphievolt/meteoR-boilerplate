# My Meteor-React App directory layout

- client/

        main.js                     # client entry point, imports all client code
        stylesheets/                # global style code, imports other styles from imports/components
        main.html		            # tags in <head> or use package to inject like react-helmet

- server/

        main.js                 # server entry point, imports all server code
 
- imports/

        startup/		            # All app-wide, common, and startup configuration
            client/                 # configuration for routes, subscriptions, or any other client side services
                routes.js               # set up all routes in the app
                subscriptions.js	    # global subscriptions, if any
            server/		            # configuration for users, email, oauth or any other server side services
                index.js		        # imports all server bootstrap, security, config and api code
                bootstrap.js            # general configuration startup code
                security.js             # set browser and security policies
                register-api.js         # imports server only code from api/*/server and all other api code
                user-config.js	        # configure user account profile and email templates

        api/			            # business logic
            contacts/		        # a unit of business logic
                index.js		        # imports all contacts apis and re-export public apis for outside use
                Contacts.js             # contacts collections
                methods.js              # contacts methods
                schema.js               # schema definitions for contacts
          
        components/	                # reusable ui components
            contacts/		        # contains template or react component code
                contacts.scss           # component ui styles
                Contacts.js             # stateless React ui component
                index.js                # imports all contacts JS code for routerc
          
            layouts/                # wrapper components for behaviour and visuals
            pages/                  # entry points for rendering used by the routerls
            lib/			        # component utility functions and shared libraries

        containers/		            # react code to pass state to component composed using react-komposer
        
- node_modules/	                
        
        # local app NPM packages
- public/
        
        # fonts, images, icons, favicon
- resources/
        
        # mobile icons and splash screens

### Run Meteor NPM install to update all node packages

#### for better & complete Meteor-React boilerplate goto https://github.com/themeteorchef/base
