# Population Finder SPA

Welcome to the ResasApi Population SPA project! This page is built using React and Vite to provide a seamless and efficient single-page application (SPA) experience. The primary function of this SPA is to allow users to find the population numbers of various prefectures and cities in Japan. The data is powered by the ResasApi.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RomaruDaze/ResasPopul.git
    cd ResasPopul
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Build for production**:
    ```bash
    npm run build
    ```

## Usage

Once the development server is running, you can access the SPA by navigating to `http://localhost:8080` (or `http://localhost:5713` depend on the port available) in your web browser. From there, you can select a prefecture, city and view the population numbers for that prefecture and its cities. There's also category for 「総人口」,「年少人口」,「生産年齢人口」,and「老年人口」which is category for age.

## Features

- **Prefecture and City Population Data**: View population numbers for all prefectures and cities in Japan. The city option changes depend on the selected prefecture.
- **Fast Loading**: Built with Vite, ensuring fast load times and efficient performance.
- **Interactive UI**: Smooth interactions and transitions to enhance the user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A next-generation front-end tooling for blazing fast development.
- **ResasApi**: The API used to fetch population data.

## API

The application uses the [ResasApi](https://opendata.resas-portal.go.jp/) to fetch population data. To use this API, you will need to sign up and obtain an API key.

1. **Obtain an API key**:
   Visit the [ResasApi website](https://opendata.resas-portal.go.jp/) and sign up to get your API key.

2. **Configure the API key**:
   Create a `.env` file in the root of your project and add your API key:
   ```env
   VITE_RESAS_API_KEY=your_api_key_here
   ```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! If you have any questions or need further assistance, feel free to reach out.
