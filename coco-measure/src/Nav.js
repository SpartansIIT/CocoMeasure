import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div>

      <nav>
      <ul>
            <li>
                <a href="Home.html">[][][]</a>               
                <ul>
                    <Link>
                    <li><a href="">Help ?</a></li>
                    </Link>
                    <Link>
                    <li><a href=""> FAQ</a></li>
                    </Link>
                    <Link  to="/Gazette">
                    <li><a href=""> Gazette</a></li>
                    </Link>
                    <Link>
                    <li><a href=""> About Us</a></li>
                    </Link>

                </ul>
            </li> 
        </ul>

      </nav>
      
     
    </div>
  );
}

export default Nav;