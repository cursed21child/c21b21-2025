// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Omar",

    // The title that appears in the browser tab
    // You can use emojis! 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? ❤️",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️'],  // Heart emojis
        bears: ['🦋', '🐑']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't JUST like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Confirm ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine this year and every other year? (I couldn't wait! Too worried someone is going to ask you before me!!) ", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Not enough ! 😒",              // Shows when they go past 1000%
        normal: "That's too little! You break my heart! "                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! Jackpot! Aren't I lucky?",
        message: "Now come get your gift, MUA7 3lik, a big warm hug and a huge kiss!",
        emojis: "🐑❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#f7Edeb",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#f3d6d0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#9e6f6f",     // Button color (should stand out against the background)
        buttonHover: "#875e5e",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#3f3f3f"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://open.spotify.com/track/5VpJrXw5GRP0tSFXAzrRM5?si=6878d4f9b5bd4f0e", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
