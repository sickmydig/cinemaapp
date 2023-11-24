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
                echo 'first stage!'
            }
        }
    }
	stage('Cloning our Git') {
		steps {
			git 'https://github.com/sickmydig/cinemaapp.git'
		}
	}

	stage('building application') {
		step {
			echo 'building application processing!'
			sh 'mvn --version'
        	sh 'mvn clean install'
		}
	}
}
