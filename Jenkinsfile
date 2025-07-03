pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/RahilHargey/JenkinswithAWS.git'
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

