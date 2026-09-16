pipeline {
  agent any

  tools { nodejs "NodeJS" }

  stages {
    stage('checkout') {
      steps {
        checkout scm
      }
    }

    stage('install') {
      steps {
        sh 'npm --version'
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

    stage('archive') {
      steps {
        archiveArtifacts artifacts: 'index.html, styles.css, package.json', fingerprint: true
      }
    }
  }

  post {
    success {
      echo 'website pipeline successfully built!'
    }
    failure {
      echo 'website pipeline build failed'
    }
    always {
      echo 'website pipeline completed'
    }
  }
}
