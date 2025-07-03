pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/my-node-app.git'  // Replace with your repo URL
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 restart app.js || pm2 start app.js'
            }
        }
    }
}

