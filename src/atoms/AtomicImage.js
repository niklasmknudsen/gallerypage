function AtomicImage() {
    return <img src={this.props.src} alt={this.props.alt} style={this.props.style} />;
}

export default AtomicImage;