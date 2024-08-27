# 📚 Course Management CLI Tool

This is a simple CLI tool for managing courses. It allows you to add new courses and list all available courses using command-line commands.

## ✨ Features

- **Add a new course** with a title and price.
- **List all courses** in a tabular format.

## ⚙️ Prerequisites

- Node.js (version 12 or higher)

## 📥 Installation

1. **Clone the repository**:

    ```sh
     https://github.com/Abdallah-        Mobarak/Course-Management-CLI-      Tool.git
    ```

2. **Navigate to the project directory**:

    ```sh
    cd course-management-cli
    ```

3. **Install the dependencies**:

    ```sh
    npm install
    ```

## 🚀 Usage

### 1. Add a Course

To add a new course, use the following command:

```sh
node index.js add

```
You will be prompted to enter the course title and price.

### 2. List All Courses

To list all courses, use the following command:

```sh
node index.js list
```
This will display all courses in a tabular format.


## 📁 Project Structure
index.js: The main file containing the CLI tool logic.

courses.json: The file where course data is stored.
## 📦 Dependencies
- commander: To manage CLI commands.
- fs: To read and write files.
- inquirer: To prompt user input.


