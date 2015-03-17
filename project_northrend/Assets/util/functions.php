<?php

function print_header($title){
    
    echo "<!DOCTYPE html>
          <html lang = 'en'>
	       <head>
		      <meta charset = 'UTF-8'/>
		      <title>Northrend - $title</title>
		      <link href='Assets/css/proj_style.css' rel='stylesheet' type='text/css'>";
    print_media_queries();
    print_nav();
}

function print_media_queries(){
    echo "<style>
                @media(min-width: 320px){
                        nav ul li{
                            padding: 0;
                            margin: 2px;
                        }

                        h1{
                            font-size: 16pt;
                            text-align: center;
                        }

                    }

                    @media(min-width: 360px){
                        nav ul li{
                            padding: 1.2% 3%;
                            margin: 1px;
                        }
                    }

                    @media(min-width: 250px){
                        .mapImage{
                            margin: 0 2% 1% 0;
                        }
                        .infoImage{
                            margin: 0 2% 1% 0;
                        }
                    }

                    @media(min-width: 600px){
                        nav ul li{
                            padding: 1% 4.8%;
                            margin: 4px;
                        }
                    }

                    @media(min-width: 768px){
                        nav ul li{
                            padding: 1% 5.3%;
                            margin: 4px;
                        }
                    }

                    @media(min-width: 800px){
                        nav ul li{
                            padding: 1% 6.3%;
                            margin: 5px;
                        }
                    }

                    @media(min-width: 980px){
                        nav ul li{
                            padding: 2% 6.8%;
                            margin: 5px;
                        }
                    }

                    @media(min-width: 1280px){

                        nav ul li{
                            padding: 2% 7.4%;
                            margin: 6px;
                        }
                    }

                    @media(min-width: 1600px){

                        nav ul li{
                            padding: 1% 7.7%;
                            margin: 6px;
                        }

                        .info_panel{
                            font-size:14pt;
                        }
                    }

                    @media(min-width: 1800px){

                        nav ul li{
                            padding: 1% 7.8%;
                            margin: 6px;
                        }
                    }
                </style>
            </head>";
}
              
function print_nav(){	

	   echo "<body>
		      <div id = 'main_wrap'>
                <header>
				<nav>
					<div id = 'nav_wrapper'>
						<ul>
							<li>
								<a href = 'index.php'>Home</a>
							</li>
							
							<li>
								<a href = 'locations.php'>Zones</a>
								<ul>
									<li><a href = 'zones.php'>Zones</a></li>
									<li><a href = 'hubs.php'>Hubs</a></li>
								</ul>
							</li>
							
							<li>
								<a href = 'people.php'>People</a>
								<ul>
									<li><a href = 'major_players.php'>Major Players</a></li>
									<li><a href = 'factions.php'>Factions</a></li>
									<li><a href = 'native_races.php'>Native Races</a></li>
								</ul>
							</li>
							
							<li>
								<a href = 'instances.php'>Instances</a>
								<ul>
									<li><a href = 'dungeons.php'>Dungeons</a></li>
									<li><a href = 'raids.php'>Raids</a></li>
								</ul>
							</li>
							
							
							
							<li>
								<a href = 'about.php'>About</a>
							</li>
						</ul>
					</div>
				</nav>
				<img id = 'hero' src='Assets/images/banner.jpg' alt='Northrend'/>
                </header>
                                
                <div class = 'content_wrap'>";
}

function print_footer(){
    echo "          </div>

                        <footer>
	                       Copyright &copy; 2014 Roberto Ortiz
                        </footer>
                    </div>
                </body>
            </html>";
}

function populate_slider($where_in_images){
    $img_dir = "Assets/images/" . $where_in_images . "/*.jpg";
    $pulled_images = glob($img_dir);
    
    foreach($pulled_images as $image){
        print $imzge;
        echo "<div><img class = 'slider_image' src ='" . $image . "' alt = '" . $image . "'/></div>";
    }
}

?>
    