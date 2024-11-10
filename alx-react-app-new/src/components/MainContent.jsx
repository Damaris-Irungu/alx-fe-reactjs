function MainContent() {
    const mainContentStyle = {
        backgroundColor: '#f0f8ff', // Light blue background
        padding: '20px', // Adds space around the content
        fontFamily: 'Arial, sans-serif', // Changes font style
        color: '#333', // Darker font color for readability
        textAlign: 'center', // Center-aligns the text
        borderRadius: '10px', // Rounds the corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Adds a subtle shadow effect
      };
    
    return (
        <div style={mainContentStyle}>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</div>
    );
}

export default MainContent;