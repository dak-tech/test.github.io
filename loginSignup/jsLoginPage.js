
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyBlbve_QVZkt4ns1GhfKXJEB5YfziyIkBM",
        authDomain: "report-project-2db60.firebaseapp.com",
        databaseURL: "https://report-project-2db60-default-rtdb.firebaseio.com",
        projectId: "report-project-2db60",
        storageBucket: "report-project-2db60.appspot.com",
        messagingSenderId: "1010937913051",
        appId: "1:1010937913051:web:9d6ac9f7b0c06098ca36fe",
        measurementId: "G-8YB5RF4KFF"
    };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);


        // ------------------------ References -------------------------------//
        const name = document.getElementById("FnameFromUser");
        const email = document.getElementById("emailFromUser");
        const Age = document.getElementById("ageFromUser");
        const Gender = document.getElementById("genderFromUser");
        const Password = document.getElementById("passwordFromUser");
        // ----------------------- References ------------------------------- //




        function RegisterUser() {
            const dbRef = ref(db);
        }


        function signUpFunction() {
            alert("Hello, this works");
            document.body.style.backgroundColor("red");
        }