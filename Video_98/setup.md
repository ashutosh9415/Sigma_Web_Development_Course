## how to setup tailwind css

Step 1: Run to the following command

'''
npm install -D tailwindcss
npx tailwindcss initgv 
''' 

Step 2: update taiwind.config.js file to include this line:

'''
  content:["*.html],
'''

Step 3: create src/input.css to include:
'''
@tailwind base;
@tailwind components;
@tailwind utilities;
'''

Step 4: Include the src/output.css file to your html

Step 5:  Run the following command
'''
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
'''