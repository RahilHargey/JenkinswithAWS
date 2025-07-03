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
                sh '/usr/bin/pm2 restart app.js || /usr/bin/pm2 start app.js'
            }
        }
    }
}

