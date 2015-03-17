<?php
    define("UTIL_PATH", "Assets/util/");
    include UTIL_PATH . "comments.php";
    include UTIL_PATH . "functions.php";
    
    print_header("About");
    include "/Volumes/Students/students/141/rno7687/db_conn.php";

    $link = mysqli_connect( $db_host, $db_user, $db_pass, $db_name);
    if(!$link){ 
        echo "<p>Connection Error: " . mysqli_connect_error() . "</p>";    
        die();
    }
    
    

    if (isset($_POST['submit'])){
        
        $name = $_POST['name'];
        $comment = $_POST['comment'];
        
        if ((empty($name)) || (strlen($name)<6) ){//| (preg_match('/^[A-z0-9]*$/', $name) == 0)){
            $err_array[] = "<li>Please enter a valid name of at least 6
    alphanumeric characters.</li>";
        }
        
        if ((empty($comment)) || ((strlen($comment)<15))){
            $err_array[] = "<li>Please enter at least 15 characters for your
    comment.</li>";
        }
    } 
    if(count($err_array) == 0){
            $query = "INSERT INTO proj_comments
                    SET user = '" . sanitize($_POST['name'], $link) . "',
                    comment = '" . sanitize($_POST['comment'], $link) . "'";
            $queryResult = mysqli_query($link, $query);
    }
    
    
?>
			
			<div class = "info_panel">
					
					<img class = "aboutImage" src = "Assets/images/About/avatar.jpg" alt ="My Character"/>
					
					
					<h1>About</h1>
					<p>	Lets get the citations out of the way. First of all, I play WoW and have done so for a while now Being a long-time player, 
						I feel pretty well versed in its lore, so much of this is from my own recollection. There are a few gaps in my memory that need 
						filling and for that I refered to wowhead.com. </p>

					<p>	For the most part, these images were gathered in-game through avatar, but there are areas where it is very difficult to screenshot. 
						These areas are either hard to venture into by oneself or have been closed off. So for the sake of time, I've utilized wowhead.com's 
						great community and database.</p>

					<p>	But I should cite the images pulled from wowhead. Most have been rescaled and cropped for use on the site, but here goes: </p>
					
					<ul>
						<li><a href = "http://www.wowhead.com/zone=4494#screenshots:id=93551">ahn_kahet.jpg | </a></li>
						<li><a href = "http://www.wowhead.com/zone=4277#screenshots:id=149992">azjol_nerub.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4500#screenshots:id=171951">eye_of_eternity.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4809#screenshots:id=175271">forge_of_souls.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4272#screenshots:id=97651">hall_of_lightning.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4264#screenshots:id=242538">hall_of_stone.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4820#screenshots:id=150212">halls_of_reflection.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4493#screenshots:id=115993">obsidian_sanctum.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4813#screenshots:id=148238">pit_of_saron.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4987#screenshots:id=171308">ruby_sanctum.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/zone=4723#screenshots:id=167378">trial_of_the_crusader.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/npc=36597#screenshots:id=158564">arthas.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/npc=37120#screenshots:id=150139">darion.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/npc=4968#screenshots:id=166449">jaina.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/npc=28859#screenshots:id=100315">malygos.jpg |  </a></li>
						<li><a href = "http://www.wowhead.com/npc=38469#screenshots:id=226374">sylvanas.jpg |  </a></li>
						<li><a href = "http://www.wowwiki.com/Vrykul">vrykul.jpg |  </a></li>
					</ul>
					<div>
						<p>Now that we've moved past that, let us get to the meat and potatoes of this page. What did I do for this site? Let's break it down:</p>
						<ul>
							<li><strong>Content:</strong> <br>Well for one, I've provided <em>a lot</em> of images. So many in fact, that I had to remove older homeworks to fit 
								the project on Gibson. A lack of forethought for sure when I started gathering images en masse. Now I'm no photographer, but I tried to take the 
								images in a consistent manner--all while keeping the "ambiance" of the subject being photographed. The textual information accompanying the
								images are as detailed as I can get them without shooing away newcomers from that which is Northrend. I try to keep a lot of the information
								tied together, so that a user can make the connections without knowing too much azerothian lore. 
							</li>
							<li><strong>Organization of Information:</strong> <br>When I started designing the nav-bar, it felt a little skewed. For instance, if one were to 
								hover over "Locations", originally, there was a subnav for each zone. Seems alright until you consider the original "Instances" page was one page. 
								There were no subnavs and all raids/dungeons were listed on a single page. Things needed adjustment. So I fit all the zones listed under "Instances" 
								on one page. I also split the "Instances" page into the "Raids" and "Dungeons" pages. The "People" portion was pretty straightfoward. A few prominent people, 
								the native folk and the warring factions.
							</li>
							<li><strong>Basic Design:</strong> <br>I love "Hero" banners, alright! Sue me! But seriously, the design of this site went through a lot. Originally, it
								was very simple. There were large margins around the main wrap. The main warp itself contained a banner, nav-bar, content and footer--going down vertically
								in that order. There were a lot of dark navy colors backing the pages; light white/cyan for text. Format-wise, it looked like my landing page. And that was the 
								problem. It was boring. I wanted to experiment (which for me, is saying a lot). So here we are. The pages have two primary formats. For the nav-pages, I have these 
								"buttons" that redirect the person to the appropriate sub-nav page. Then there are the sub-nav pages themselves. They follow the same format. Image on left, info on
								right. It shoots straight down. 
							</li>
							<li><strong>Navigation:</strong> <br>Navigation is pretty sttraightfoward. There is just one nav-bar at the top. The sub-navs are not deep enough for a secondary nav, I think
								though I regret not adding a "back to top" button at the bottom.
							</li>
							<li><strong>Use of CSS and HTML:</strong> <br>Being really rusty at CSS and HTML, I feel like this was a pretty hacky job at best. Still this is the best website design I have ever done.
								I used a lot of wrappers (maybe overused), so that I could manipulate the different components of the page. I tried to keep the conte design simple through use of three panels: 
								info_panel and button_panel. I also stuck to two main image sizes for simplicity's sake: map_image and info_image.
							</li>	
						</ul>
					</div>
                
                    <div>

                            <ul>
                
                                
                                <li><strong>Corrections:</strong> <br>Spelling has been taken care of (I hope...). Titles have been improved. Padding adjusted for .info_panel and navigation looks a little nicer.
                                </li>
                                <li><strong>Comments</strong> <br>Comments.php simply generates html on about.php. Felt that the comments being its own standalone thing would be too tacky. So merging it with this page seemed to make sense.
                                </li>
                                <li><strong>Extra 1:</strong> <br>Media queries, I suppose.
                                </li>
                                
                            </ul>
                        </div>
                
                </div>

                    <div id = 'c_container'>
                        <div id = 'comment_container'>
                            
                            <?php
                                 $query = "SELECT * 
                                            FROM proj_comments";
                                $queryResult = mysqli_query($link, $query);
                                $num_results = mysqli_affected_rows($link);
                                
                                echo "<h3>Comments (" . $num_results . ")</h3>";
                                if ( $queryResult && $num_results >0){
                                    while( $row = mysqli_fetch_assoc( $queryResult ) ){

                                        echo sprintf( "<div class = 'comment'>%10s says: %-10s</div><br>", $row['user'],$row['comment'] );
                                    }
                                }else{ 
                                    echo "<p>No comments. Be the first!</p>";
                                }
                            ?>
                            
                        </div>
                        
                        <?php 
                            
                            init_comments(); 
                            if (count($err_array) > 0){
                                    echo "<div class = 'error'><ul>";
                                    foreach ($err_array as $error){
                                            echo "$error<br>";
                                    }
                                    echo "</ul></div>";
                            }   
                        ?>
                        
                    </div>
					
<?php print_footer() ?>