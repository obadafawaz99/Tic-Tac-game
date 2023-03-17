let title = document.querySelector( ".title" );
let turn = "X";
let square = document.querySelectorAll( ".square" );
let squers = [];
let counter = 0;
function end(num1,num2,num3) {
  title.innerHTML = `${ squers[ num1 ] } is winner`;
  document.getElementById( "item" + num1 ).style.backgroundColor = "yellow" ;
  document.getElementById( "item" + num2 ).style.backgroundColor = "yellow";
  document.getElementById( "item" + num3 ).style.backgroundColor = "yellow";
  setInterval( function() { title.innerHTML += "." },1000 );
  setTimeout( function() { location.reload() },4000 );
  let div = document.createElement( "div" );
  let node = document.createTextNode( `${ squers[ num1 ] }` );
  div.appendChild( node );
  div.className = "poupap";
  document.body.appendChild( div );
}
function game ( id ) {
  let element = document.getElementById( id );
  if( turn === "X" && element.innerHTML == "" )
  {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = ` Turn ${turn}`;
  }
  else if( turn === "O" && element.innerHTML == "" )
  {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = ` Turn ${turn}`;
  }
  winner();
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squers[ i ] = document.getElementById( "item" + i ).innerHTML;
  }
  if (squers[1]==squers[2] && squers[2]==squers[3]&& squers[3]!='') {
    end( 1,2,3 );
  }
  else if (squers[4]==squers[5] && squers[5]==squers[6]&& squers[6]!='') {
    end( 4,5,6 );
  }
  else if (squers[7]==squers[8] && squers[8]==squers[9]&& squers[9]!='') {
    end( 7,8,9 );
  }
  else if (squers[1]==squers[4] && squers[4]==squers[7]&& squers[7]!='') {
    end( 1,4,7 );
  }
  else if (squers[2]==squers[5] && squers[5]==squers[8]&& squers[8]!='') {
    end( 5,2,8 );
  }
  else if (squers[3]==squers[6] && squers[6]==squers[9]&& squers[3]!='') {
    end( 6,9,3 );
  }
  else if (squers[1]==squers[5] && squers[5]==squers[9]&& squers[9]!='') {
    end( 1,5,9 );
  }
  else if (squers[3]==squers[5] && squers[5]==squers[7]&& squers[3]!='') {
    end( 3,5,7 );
  }
  else
  {counter=counter+1
    if(counter==9){
      setTimeout( function() { location.reload() },4000 );
      let div = document.createElement( "div" );
      let node = document.createTextNode( "DRAW" );
      div.appendChild( node );
      div.className = "poupap";
      document.body.appendChild( div );
    }
  }
}