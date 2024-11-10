function Footer() {
    const footerStyle = {
        backgroundColor: '#333', // Dark background for the footer
        padding: '15px', // Adds space around the text
        color: '#f9f9f9', // Light text color for contrast
        fontFamily: 'Arial, sans-serif', // Matches font with main content
        textAlign: 'center', // Center-aligns the text
        borderTop: '2px solid #ddd', // Adds a border at the top
        fontSize: '0.9em', // Slightly smaller font for the footer
      };
    return (
        <footer style={footerStyle}>
  <p>© 2023 City Lovers</p>
</footer>
    );
}

export default Footer;