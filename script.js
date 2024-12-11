let otpSent = false;
let otp = '';
let expirationTime = 0;
let queryCount = 0;
const maxQueries = 5;

function sendOTP() {
    const email = document.getElementById('email').value;
    otp = Math.floor(100000 + Math.random() * 900000).toString();
    expirationTime = Date.now() + 3600000; // 1 hour

    // Simulate sending OTP via email
    console.log(`Sending OTP ${otp} to ${email}`);
    alert(`OTP sent to ${email}`);

    otpSent = true;
    document.getElementById('otpForm').style.display = 'none';
    document.getElementById('verifyForm').style.display = 'block';
}

function verifyOTP() {
    const enteredOtp = document.getElementById('otp').value;

    if (Date.now() > expirationTime) {
        alert('OTP has expired. Please request a new one.');
        resetForms();
        return;
    }

    if (enteredOtp === otp) {
        queryCount++;
        if (queryCount > maxQueries) {
            alert('Query limit exceeded. Please request a new OTP.');
            resetForms();
            return;
        }
        alert('OTP verified successfully! You can now access the report.');
        // Redirect to the report link
        window.location.href = 'https://your-report-link';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function resetForms() {
    otpSent = false;
    otp = '';
    expirationTime = 0;
    queryCount = 0;
    document.getElementById('otpForm').style.display = 'block';
    document.getElementById('verifyForm').style.display = 'none';
}
