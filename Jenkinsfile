pipeline {
	environment {
		registry = "dockerfordummy/cinemaapp"
		registryCredential = 'dockerfordummy'
		dockerImage = ''
	}
    agent any
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!'
            }
        }
    }
	stage('Cloning our Git') {
		steps {
			git 'https://github.com/YourGithubAccount/YourGithubRepository.git'
		}
	}
}
