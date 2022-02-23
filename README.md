# Boilerplate project for CoinAlpha DSM

This is a boilerplate project to quickly start a React application using the CoinAlpha DSM files (elements, components, constants).

This project includes a command that allows you to pull the latest files from the design system to ensure all the base elements and components are updated according to the latest design system guidelines.

### Important usage note

To use this project you need to be able to to update the design systems files. To achieve this, it is necessary to create a configuration file that will be used to authenticate with Github. For this purpose, you will need to use a Github "personal access token", see instructions below.

## Installation

1. Checkout the project to your computer
2. Get or create your personal access token on Github
3. Create the configuration file
4. Install dependencies
5. Download the updated design system dependencies
6. Start project

### 1. Checkout the project to your computer

```shell
git clone git@github.com:CoinAlpha/dsm_boilerplate.git your-desired-folder-name
```

### 2. Get or create your Personal Access Token on Github

You can do it in [this page](https://github.com/settings/tokens).

### 3. Create the configuration file

Create a file named `github_auth.json` inside the folder `/updates_config/`

```
projectroot/
│
└───updates_config/
    └───github_auth.json
```

Copy the following code and paste it in the file `github_auth.json`. Then, replace `your-github-user-name` with your own username, and `your-token-here` with your personal access token. 

```
{
  "auth": {
    "username" : "your-github-user-name",
    "password" : "your-token-here"
  },
  "alwaysUseAuth" : true,
  "timeout" : 5000 
}

```

### 4. Install dependencies

Using

```shell
yarn
```
or

```shell
npm install
```

### 5. Download the updated design system dependencies

This command will download all the latest files from the DSM source (elements/components/constants) and the latest Tailwind configuration.

Run the command

```shell
yarn update
```

or

```shell
npm run update
```

This will download the following files and folders:

```
projectroot/
│
└───tailwind.config.js
└───src/hb_ui/
└───specify/
```

The "specify" folder will contain a tokens.js file with all the design tokens necessary for the design system to work. These tokens are used by the files `/tailwind.config.js`, `hb_ui/constants/colors/index.js` and `hb_ui/system/darkModeConfig.js`.

NOTE: Do not make changes to these files. They will be ignored by the .gitignore configuration - all the updates to these files must be made in the original DSM repository and approved by the design team.

### 6. Start project

```shell
yarn start
```

or

```shell
npm run start
```

It will automatically open a new tab on
http://localhost:1234


---


This project was Bootstrapped with https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion