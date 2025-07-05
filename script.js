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
        <p>I am aiming for you Google, and IBM</p>
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
                <li>MySQL</li>
                <li>Basic Web Security</li>
                <li>Linux</li>
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
        <li>achievements</li>
        <li>help</li>
        <li>skills</li>
        <li>link-to-git</li>
        <li>link-to-itch</li>
        <li>contact-info</li>
        <li>sample_projects</li>
        <li>clear</li>
        
      </ul>
      <p>==========================</p>
    `;
  }

  else if (command === 'sample_projects')
  {
    response = `
      <div>
        <p>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
        <ul>
          <p><a href="https://github.com/ArtemioVibora/Comrade_Hope">Comrade Hope</a> is made as a face/emotion detection chatbot.</p>
          <p><a href="https://github.com/ArtemioVibora/Miyasan">Miyasan</a> is made as a database/json parser.</p>
        </ul>
        </p>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
      </div>
    `;
  }


  else if (command === 'contact-info')
  {
    response = `
      <div>
        <p>Email: ilokanozeus12@gmail.com</p>
        <p>Facebook link: <span><a href="https://www.facebook.com/ilokano.si.zeus/">Ilokano si Zues</a></span></p>
        <p>Discord name: adoviktorreznov</p>
        
      </div>
    `;
  }
  else if (command === 'clear')
  {
    outputDiv.innerHTML = "";
  }

  else if (command === 'achievements')
  {
    response = `
      <p>==========================</p>
      <ul>
        
        <li>Winner of the Game Jam Plus Best Non Unity Game 2023</li>
        <li>Dean's lister first term 2024-25 first honor</li>
        <li>Dean's lister second term 2024-25 second honor</li>
        <li>Winner of Capture the flag contest SOC week 2025 iacademy</li>
        <li>Winner of ICT Quiz Bee "Brain Busters" SOC week 2025 iacademy</li>
        <li>Participated in PENLAB game jam 2023</li>
        <li>Most outstanding engagement project award 2019 certified UP NSTP</li>
        <li>Web design certified by Freecode camp</li>
        <li>Certificate of appreciation Vote Report 2025</li>
        <li>Web Security SOC Week 2025 certificate</li>
        <li>Blockchain SOC Week 2025 certificate</li>
      </ul>
      <p>==========================</p>
    
    `;
  }


  // TO DO: Use jp2a for this to make a logo
  else if (command === 'devfetch')
  {
    response =
    `
    <pre>

                  '..';;x               
               .,,,,,l;;.               
             .;,,,,,xOo                
  ''..''...',,,,,,,kx;  
   .,;,,,,,,,,,,,,kl.                 
 ,'...;,,,,,,,,,;c.                     
  ...',,,,,,,,,;c  ..                   
 .';,,,,,,'.. .d.  ...     oOOk:        
......       .k.    ...   ,WMMMMN'      
            .;      ...'' OKxxMMMk      
           .'        ''''l00;.0MMW.     
           ..         xo,.,Oo.,WMM,     
         .,' .        XMWO:lOk:cNMX.    
        .:. ;xx:'..,;xMWXl;'OXc..kK; .' 
       .'.   .oxxl:lX0KNKxxONXd::lc,.c  
      ,,         ..;o:kOkddl'.,'..,'X   
     lk           ,0XXOdloc;. l:. ;Nl   
    ,:.          .0XXXXXXX0xc ,:l.XO.   
   .,            ,KXKXKKOKKd.  o K0     
                 dkXXX0OKKl. ..lkMXxol  
                ,XXXOclXXKk.  'oMM:.''  
               :XK0:.oXKKd.    0d.x;    
              :KX0d:KKO.lO    ;W,       
             :;'0Kk0K0c.dKl  kxW'       
           .::;..oc00OOxxxd:.;ld.       
          .xxxclc  ';.  .:.   l         
         ;..'. l.  .      ....,.....    
    .....      .'         .xd.    .c    
  '  ..     ':l''         ,xl;'..';'    
  ..kKOOdodOKKKk00OO.      ...O0:lx   
===============================================
User        : Amado
Languages   : C++, Python, Java, Assembly
Projects    : Bootloader, OS, Text Editor, Chatbot
Tools       : Git, NASM, GCC, G++
Github      : github.com/artemiovibora
===============================================
    </pre>
    `;
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

//Bootloader
const loader = document.getElementById("loader");
const bootlog = document.getElementById("bootlog");
const content = document.getElementById("content");

const bootSteps = [
  { text: "[ OK ] Mounted /boot", class: "boot-ok" },
  { text: "[ OK ] Initialized Vault Terminal Kernel", class: "boot-ok" },
  { text: "[ OK ] Connected to Developer Interface Daemon", class: "boot-ok" },
  { text: "[ WARN ] No Mouse Detected — Switching to Terminal Mode", class: "boot-warn" },
  { text: "[ OK ] Mounted /dev/sda1 to /boot", class: "boot-ok" },
  { text: "[ OK ] Detected brothers operator", class: "boot-ok" },
  { text: "[ OK ] Establishing neural link", class: "boot-ok" },
  { text: "[ WARN ] Brainwave instability detected", class: "boot-warn" },
  { text: "[ OK ] Mounting /home/brother", class: "boot-ok" },
  { text: "[ OK ] Decrypting classified portfolio data", class: "boot-ok" },
  { text: "[ OK ] Connected to localhost (69.4.2.0)", class: "boot-ok" },
  { text: "[ OK ] Loading terminal environment", class: "boot-ok" },
  { text: "[ OK ] Setting timezone: UTC+08:00", class: "boot-ok" },
  { text: "[ OK ] Engaging sarcasm module", class: "boot-ok" },
  { text: "[ OK ] Activating cringe filter", class: "boot-ok" },
  { text: "[ WARN ] Cringe filter overloaded", class: "boot-warn" },
  { text: "[ OK ] Compiling quantum thoughts and hilbert spaces", class: "boot-ok" },
  { text: "[FAILED] Failed to mount /mnt/fascism", class: "boot-fail" },
  { text: "[ OK ] Generating shitposty comebacks", class: "boot-ok" },
  { text: "[ OK ] Scanning for small brain", class: "boot-ok" },
  { text: "[ OK ] All small brain quarantined", class: "boot-ok" },
  { text: "[ OK ] Loading AI co-pilot: Me", class: "boot-ok" },
  { text: "[ OK ] Me online. Roast protocols enabled.", class: "boot-ok" },
  { text: "[ OK ] Disabling impostor syndrome", class: "boot-ok" },
  { text: "[ OK ] Installing anti-fascist firewall", class: "boot-ok" },
  { text: "[ OK ] Launching terminal within website beep bop beep bop", class: "boot-ok" },
  { text: "[ OK ] Simulating boot to boot in the boot", class: "boot-ok" },
  { text: "[ OK ] Injecting caffeine and cigarettes into RAM", class: "boot-ok" },
  { text: "[ OK ] Validating pink color palette", class: "boot-ok" },
  { text: "[ WARN ] Nina.exe attempted to access your heart", class: "boot-warn" },
  { text: "[ OK ] Hehe sandboxed for your safety", class: "boot-ok" },
  { text: "[ OK ] Linking my consciousness", class: "boot-ok" },
  { text: "[ OK ] Initializing creativity buffers SMPF", class: "boot-ok" },
  { text: "[ OK ] Accessing developer timeline", class: "boot-ok" },
  { text: "[ OK ] 3 years of programming unlocked", class: "boot-ok" },
  { text: "[FAILED] SMPF not found (continuing anyway)", class: "boot-fail" },
  { text: "[ OK ] System temperature stable: 98.6°F", class: "boot-ok" },
  { text: "[ OK ] Bootloader: Ultra Plus v4.20", class: "boot-ok" },
  { text: "[ OK ] Hecking mode: READY", class: "boot-ok" },
  { text: "[ OK ] Echoing purpose into void... done", class: "boot-ok" },
  { text: "[ OK ] Launching Amado’s Portfolio Shell", class: "boot-ok" },
];

window.addEventListener("load", () => {
  
  setTimeout(() => {
    loader.style.display = "none";
    bootlog.style.display = "block";

    
    runBootSequence();
  }, 500); // Delay after loader
});

function runBootSequence() {
  let i = 0;

  function nextLine() {
    if (i < bootSteps.length) {
      const line = document.createElement("div");
      line.textContent = bootSteps[i].text;
      line.classList.add(bootSteps[i].class);
      bootlog.appendChild(line);
      bootlog.scrollTop = bootlog.scrollHeight;
      i++;
      setTimeout(nextLine, 400 + Math.random() * 200); 
    } else {
      
      setTimeout(() => {
        bootlog.style.display = "none";
        content.style.display = "block";
        document.getElementById("terminal-container").style.display = "flex";
        document.getElementById("commandInput").focus();
      }, 1000);
    }
  }

  nextLine();
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.opacity = 0;
  

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 600);
});

