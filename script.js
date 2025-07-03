// script.js
const commandInput = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');

//Sanitizes
function escapeHtml(str)
{
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

commandInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const input = commandInput.value.trim().toLowerCase();
    handleCommand(input);
    commandInput.value = '';
  }
});

function handleCommand(command) {
  let response = '';

  if (command === 'about-me') {
    response = `
      <div>
        <h3>About Me</h3>
        <p>Hello! I am a developer passionate about Computer Science, Quantum Computing, and gardening.</p>
        <p>I am a graduate of malikhaing pagsulat sa Filipino (Creative Writing in Filipino), and was a</p>
        <p>student of Araling Panlipunan Major in Political Science (Philippine Studies) but I shifted</p>
        <p>to Computer Science because of Game Development, since then I am in love with the world of </p>
        <p>Of Computing, Mathematics, and Science</p>
      </div>
    `;
  }
  else if (command === 'sample-projects')
  {
    response = `
      <div class="factContainer">
        <img>
        <p></p>
      </div>
    `;
  }
  else if (command === 'profile-picture')
  {
    response = `
      <h2>This is me :)</h2>
      <img class="imageTest" src="Images/developerProfilePicture.jpg">
    `;
  }
  else if (command === 'about-the-portfolio')
  {
    response = `
      <div>
        <p>I simply got tired of the usual website look with the navbar and div as containers</p>
        <p>So I made my portfolio into a terminal because why not and I wanted to give it my flare</p>
      </div>
    `;
  }
  else if (command === 'ambitions')
  {
    response = `
      <div>
        <h3>What are my goals</h3>
        <p>My primary goal is Quantum Computing</p>
        <p>For I sincerely believe that that is where the next tech revolution is</p>
        <p>And since I love Mathematics and Science, I am more than willing to</p>
        <p>go forth with Qubits and Photonic signals</p>
      </div>
    `;
  }
  else if (command === 'link-to-git')
  {
    response = `
        <div>
            <h3>Link to my GitHub page</h3>
            <p><span><a href="https://github.com/ArtemioVibora">Link to my github page</a></span></p>
        </div>
    `;
  
  }
  else if (command === 'link-to-itch')
  {
    response = `
        <div>
            <h3>Link to my Itch IO</h3>
            <p><span><a href="https://gilidraner.itch.io/">Itch IO</a></span></p>
        </div>
    `;
  
  }
  else if (command === 'skills')
  {
    response = `
        <div>
            <h3>My skills as of the moment are: </h3>
            <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>Unreal Engine</li>
                <li>Project Management</li>
                <li>Godot</li>
                <li>SConstruct</li>
            </ul>
        </div>
    `;
  }
  else if (command === 'help') 
  {
    response = `
      <p>Available commands:</p>
      <p>==========================</p>
      <ul>
        
        <li>About-the-portfolio</li>
        <li>about-me</li>
        <li>help</li>
        <li>skills</li>
        <li>link-to-git</li>
        <li>link-to-itch</li>
        <li>contact-info</li>
        <li>clear</li>
        
      </ul>
      <p>==========================</p>
    `;
  }
  else if (command === 'contact-info')
  {
    response = `
      <div>
        <p>Email: juan.amado.sicat.cleto@gmail.com</p>
        <p>Facebook link: <span><a href="https://www.facebook.com/ilokano.si.zeus/">Ilokano si Zues</a></span></p>
        <p>Discord name: adoviktorreznov</p>
        <p>Phone number: 09173022091</p>
      </div>
    `;
  }
  else if (command === 'clear')
  {
    outputDiv.innerHTML = "";
  }

  else if (command === 'achievements')
  {
    response = `<div><p> Hello </p> </div>`;
  }

  else if (command === 'devfetch')
  {

  }

  else if (command === 'full-description')
  {
    response = `
      <h1>Hello World</h1>
    `;
  } 
  else {
    response = `<p>Command not found. Type 'help' for available commands.</p>`;
  }

  const safeCommand = escapeHtml(command);
  outputDiv.innerHTML += `<div>&gt; ${safeCommand}</div>${response}`;
  outputDiv.scrollTop = outputDiv.scrollHeight;
}
