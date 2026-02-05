pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Mahesh-Vilasagaram/Docker-CI-CD-Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t docker-cicd:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f docker-cicd || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name docker-cicd -p 3000:3000 docker-cicd:latest'
            }
        }
    }
}

