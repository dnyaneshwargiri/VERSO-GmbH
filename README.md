<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Fizz Buzz is a Simple Angular application which does below things.

```sh
i] prints 'Fizz' if number % 3 === 0
ii] prints 'Buzz' if number % 5 === 0
ii] prints 'Fizz Buzz' if (number % 3 === 0 && number % 5 === 0 )
```


https://github.com/user-attachments/assets/994b27a4-17ce-4cdb-87c0-3052e939b26e


### Built With

Below are frameworks/ libraries used to bootstrap this project.

- ![Angular](https://img.shields.io/badge/angular-%2320232a.svg?style=for-the-badge&logo=angular&logoColor=%2361DAFB)
- ![Tailwind CSS.](https://img.shields.io/badge/tailwind-css-%2320232a.svg?style=for-the-badge&logo=tailwind-css&logoColor=%2361DAFB)
- ![Testing Library.](https://img.shields.io/badge/testing-library%2320232a.svg?style=for-the-badge&logo=testing-library)
- ![PNPM](https://img.shields.io/badge/pnpm-%232C8EBB.svg?style=for-the-badge&logo=pnpm&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Getting Started

Below are instructions on setting up your project locally.

### Prerequisites

- Node 22.5.0
- Anular 17.2.0
- PNPM 8.15.4
- Typescript": ^5.5.2
- Docker >25.0.3

### Installation

1. Clone the repo
   ```sh
    git clone https://github.com/dnyaneshwargiri/VERSO-GmbH.git
   ```
2. Install NPM packages
   ```sh
    pnpm install
   ```
3. Compile Fizz-Buzz app

   ```sh
   pnpm build:production
   ```

4. Run Fizz-Buzz app

   ```sh
   pnpm start /* production */
   pnpm dev /* dev mode */
   ```

   Application uses `pnpm workspaces`

## Test and Lint

Run test cases

```sh
pnpm test
```

Check for linting Warnings, Error

```sh
pnpm lint
```

## To run application via Docker Image

1. Build application for production
   ```sh
     pnpm build:production
   ```
2. Build Docker image
   ```sh
     chmod +x docker.build.sh
   ```
   ```sh
    ./docker.build.sh production 3000
   ```
3. Run Docker image
   ```sh
     docker run -p 3000:3000 fizz-buzz-app
   ```
4. Launch in Browser
   ```sh
     localhost:3000
   ```

Please be informed commits are intentionly not squashed.

## Open issue
