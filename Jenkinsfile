pipeline {
    agent any

    tools {
        maven "maven"
    }

    stages {
        stage('git clone') {
            steps {
				
				script{
					checkout scm
					//bat "git clone --branch main https://github.com/Adveeramalla/apigeee-sample-proxy.git"
				}
                //
            }
        }
          stage('Deploy Proxy') {
            steps {
                    script{
                         bat "mvn install -Ptest -f shared-pom.xml -Dorg=adityaveeramalla-eval -Denv=test -Dusername=aditya.veeramalla@gmail.com -Dpassword=Theviper\$369 -Doptions=override"        
                    }
            }
            
        }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
