
javascript
// Simple JavaScript for enhancing user experience
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website Loaded!");
});
    <script>
        function togglePrivacyPolicy() {
            var policy = document.getElementById("privacyPolicy");
            if (policy.style.display === "none" || policy.style.display === "") {
                policy.style.display = "block"; // Show the policy
            } else {
 policy.style.display = "none"; // Hide the policy
            }
        }
    </script>