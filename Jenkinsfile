pipeline {
    agent {
        docker {
            image 'node'
            args '-u root:root --memory-reservation=800m --memory=900m --memory-swap=0'
        }
    }
    stages {
        stage('setup') {
            steps {
                sh 'node --version'
                sh 'npm -v'
                sh "npm cache clean --force"            
            }
        }
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('dep install') {
            steps {
                sh 'npm i'
            }
        }
        stage('jest') {
            steps {
                sh 'npm run test'
            }
        }
    }
}