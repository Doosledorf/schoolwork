function print_header()
{
	echo"
		<div id="header">
		Header
		</div>
		<div id="nav">
			<ul>
				<li><a href="#"><h3><i class="fa fa-home"></i>Home</h3></a></li>
				<li><h3><i class="fa fa-info-circle"></i>About</h3></a>
					<ul>
						<li><a href="#">About 1</a></li>
						<li><a href="#">About 2</a></li>
						<li><a href="#">About 3</a></li>
					</ul>
				</li>
				<li><h3><i class="fa fa-graduation-cap"></i>Beginners</h3>
					<ul>
						<li><a href="#">About 1</a></li>
						<li><a href="#">About 2</a></li>
						<li><a href="#">About 3</a></li>
					</ul>
				</li>
				<li><h3><i class="fa fa-graduation-cap"></i>Intermediate</h3>
					<ul>
						<li><a href="#">About 1</a></li>
						<li><a href="#">About 2</a></li>
						<li><a href="#">About 3</a></li>
					</ul>
				</li>
				<li><h3><i class="fa fa-graduation-cap"></i>Advanced</h3>
					<ul>
						<li><a href="#">About 1</a></li>
						<li><a href="#">About 2</a></li>
						<li><a href="#">About 3</a></li>
					</ul>
				</li>
				<li><h3><i class="fa fa-book"></i>Resources</h3>
					<ul>
						<li><a href="#">About 1</a></li>
						<li><a href="#">About 2</a></li>
						<li><a href="#">About 3</a></li>
					</ul>
				</li>
			</ul>
		</div>
	";
}

function print_LocalNav()
{
	echo"
	<div id="localNav">
				<ul>
					<li><a href="#">Page1</a></li>
					<li><a href="#">Page2</a></li>
					<li><a href="#">Page3</a></li>
					<li><a href="#">Page4</a></li>
					<li><a href="#">Page5</a></li>
				</ul>
			</div>
	";
}

function print_Footer()
{
	echo"
	<div id="footer">Copyright &copy; 2014<br>Background image courtousy of <a href="http://subtlepatterns.com/grey-washed-wall/">Subtle Patterns</a></div>
	";
}