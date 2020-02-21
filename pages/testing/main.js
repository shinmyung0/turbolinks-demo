console.log('testing')

export default function render() {
    const btn = document.getElementById('testing-btn')

    btn.onclick = () => {
        alert('clicked!')
    }

}
