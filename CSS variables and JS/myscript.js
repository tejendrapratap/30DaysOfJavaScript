const inputs = document.querySelectorAll('input');

function updateDoc(){
    const suffix = this.dataset.sizing || '';
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', updateDoc));
inputs.forEach(input => input.addEventListener('mousemove', updateDoc));
