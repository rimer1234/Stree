const stickyArea = document.querySelector('#stickies-container');
const createStickyButton = document.querySelector('#createsticky');

const stickyTitleInput = document.querySelector('#stickytitle');
const stickyTextInput = document.querySelector('#stickytext');

let n_post = 0;

const deleteSticky = e => {
    e.target.parentNode.remove();
    n_post--;
    updatestore();
  };
 
  function createSticky()
   {
    var now = new Date();
    var time = now.toLocaleTimeString();

    if (stickyTextInput.value == "")
    {
        alert("Please write something.");
        return;
    }
    if (stickyTitleInput.value == "")
    {
        alert("Please write a title.");
        return;
    }
    const newSticky = document.createElement('div');
    var postinfo;
    if("username" in localStorage)
    {
         var data = localStorage.getItem("username");//make sure the "key name" exists in the localStorage
         postinfo = "<strong>@" + data + "</strong>:" +stickyTextInput.value + "<small> at "  + time + "</small><br><br><i>Replies:</i>";
    }
    else
    {
            postinfo = stickyTextInput.value;
    }
     
    const html = `<h3 id="titlepost">${stickyTitleInput.value}</h3><p id="main">${postinfo}</p> <input type="text" style=" line-height: 1.5em;" id="stickytitle" placeholder="Reply"/><button id = "Go" style="margin: 5px; align-items:center" onclick="Refresh()">Go</button><span class="deletesticky">&times;</span>`;
    newSticky.classList.add('sticky');
    newSticky.innerHTML = html;
    newSticky.style.margin = "1.1%";
    newSticky.style.background = randomColor();
    newSticky.style.color = "black";
    stickyArea.append(newSticky);
    positionSticky(newSticky);
    applyDeleteListener();
    clearStickyForm();
    updatestore();
    n_post++;
  }

  function loadposts(val, header)
   {
    const newSticky = document.createElement('div');
    const html = `<h3 id="titlepost">${header}</h3><p id="main">${val}</p> <input type="text" style=" line-height: 1.5em;" id="stickytitle" placeholder="Reply"/><button id = "Go" style="margin: 5px; align-items:center" onclick="Refresh()">Go</button><span class="deletesticky">&times;</span>`;
    newSticky.classList.add('sticky');
    newSticky.innerHTML = html;
    newSticky.style.margin = "1.1%";
    newSticky.style.background = randomColor();
    stickyArea.append(newSticky);
    positionSticky(newSticky);
    applyDeleteListener();
    clearStickyForm();
    n_post++;
  }


  function randomColor() {
    const r = 200 + Math.floor(Math.random() * 56);
    const g = 200 + Math.floor(Math.random() * 56);
    const b = 200 + Math.floor(Math.random() * 56);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  
  function clearStickyForm() 
  {
    stickyTitleInput.value = '';
    stickyTextInput.value = '';
  }

  function applyDeleteListener() 
  {
    let deleteStickyButtons = document.querySelectorAll('.deletesticky');
    deleteStickyButtons.forEach(dsb => {
      dsb.removeEventListener('click', deleteSticky, false);
      dsb.addEventListener('click', deleteSticky);
    });
  }

  function positionSticky(sticky) 
  {    
    sticky.style.position = "relative";
  }

  function updatestore()
  {
    let notes = document.querySelectorAll('.sticky');
    var posts = [], headers = [];
    var reply, main;
    notes.forEach(dsb => {
        const c = dsb.children;
        var post, header;        
        for (i = 0; i <= 3; i++) {
            var child_id= c[i].id;
            if (child_id == "titlepost")            
            {
                header = c[i].innerHTML;
                console.log(header)                
            }
            if (child_id == "main")
            {
                post = c[i];
                console.log(post.innerHTML) 
            }
        }  
        posts.push(post.innerHTML) ;
        headers.push(header)
      });
      localStorage.setItem('posts', JSON.stringify(posts));
      localStorage.setItem('heads', JSON.stringify(headers));
      console.log("saving", posts, headers);
  }


function Refresh()
{
    let notes = document.querySelectorAll('.sticky');
    var reply, main;
    var now = new Date();
    var time = now.toLocaleTimeString();

    notes.forEach(dsb => {
        const c = dsb.children;
        var post, userreply;        
        for (i = 0; i <= 3; i++) {
            var child_id= c[i].id;
            if (child_id == "stickytitle")            
            {
                reply = c[i].value;
                userreply = c[i];
            }
            if (child_id == "main")
            {
                post = c[i];
            }
        }  
        if (reply != "")    
        {
            if("username" in localStorage)
            {
                var data = localStorage.getItem("username");//make sure the "key name" exists in the localStorage
                reply = "<strong>@" + data + "</strong>: <i>" +reply + "</i><small> at " + time +"</small>";
            }
        
            post.innerHTML += "<br><br>" + reply;  
        }
        userreply.value = "";
        reply = "";
        main = "";
      });
      updatestore();
    }

    function logout()
    {
        if("username" in localStorage)
            localStorage.removeItem("username");
        window.open("Login.html", "_self");
    }

    function load()
    {
        if("posts" in localStorage)
        {
            const storedposts = JSON.parse(localStorage.getItem('posts'));
            const storedheads = JSON.parse(localStorage.getItem('heads'));
            console.log("reading", storedposts, storedheads)
            for (i = 0; i < storedposts.length; i++)
                loadposts(storedposts[i], storedheads[i])
        }
    }

    load();
