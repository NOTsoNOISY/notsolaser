#
#   /)_/) NOTsoNOISY
#  ( x_x) GUILLAUME
#  (/   ) REYMOND
#  http://www.notsonoisy.com
# -------------------------------------------------------------------------
#  notsolaser - mono line engraver text font
# -------------------------------------------------------------------------
# Modified/simplified in march 2018 by NOTsoNOISY GUILLAUME REYMOND
# for a new simplier line font called "notsolaser"
# These font exist also as regular computer font: notsolaser.ttf or .otf
# http://www.notsonoisy.com/notsolaser
#
# This tool renders a line of text using specialized
# "stroke" or "engraving" fonts designed for plotters. 
#
# Whereas regular "outline" fonts (e.g., TrueType) work
# by filling in the region inside an invisible outline,
# engraving fonts are composed only of individual lines
# or strokes; much like human handwriting.
#
# Engraving fonts are used for creating text paths that
# computer controlled drawing and cutting machines (from
# pen plotters to CNC routers) can efficiently follow.
# -------------------------------------------------------------------------
# This Inkscape's extension is adapted from the "Hershey Text 2.0"
# originally prepared in 2011 by Windell H. Oskay, www.evilmadscientist.com
# Contents adapted from emergent.unpythonic.net/software/hershey
# by way of "Hershey Fonts in SVG" by Marty McGuire
# http://www.thingiverse.com/thing:6168 
# -------------------------------------------------------------------------
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# https://www.gnu.org/licenses/gpl-3.0.en.html

import notsolaserdata
import inkex
import simplestyle

def draw_svg_text(char, face, offset, vertoffset, parent):
	pathString = face[char]
	splitString = pathString.split()  
	midpoint = offset - float(splitString[0])
	pathString = pathString[pathString.find("M"):] #portion after first move
	trans = 'translate(' + str(midpoint) + ',' + str(vertoffset) + ')'
	text_attribs = {'d':pathString, 'transform':trans}
	inkex.etree.SubElement(parent, inkex.addNS('path','svg'), text_attribs) 
	return midpoint + float(splitString[1]) #new offset value

class notsolaser( inkex.Effect ):
	def __init__( self ):
		inkex.Effect.__init__( self )
		self.OptionParser.add_option( "--tab",  #NOTE: value is not used.
			action="store", type="string",
			dest="tab", default="splash",
			help="The active tab when Apply was pressed" )
		self.OptionParser.add_option( "--text",
			action="store", type="string", 
			dest="text", default="notsolaser Text for Inkscape",
			help="The input text to render")

	def effect( self ):
		OutputGenerated = False

		# Group generated paths together, to make the rendered letters easier to manipulate in Inkscape.
		g_attribs = {inkex.addNS('label','inkscape'):'notsolaser Text' }
		g = inkex.etree.SubElement(self.current_layer, 'g', g_attribs)

		style = { 'stroke' : '#FF0000', 'fill' : 'none', 'stroke-linecap' : 'round', 'stroke-linejoin' : 'round' }
		# Apply rounding to ends so that user gets best impression of final printed text appearance.
		g.set( 'style',simplestyle.formatStyle(style))	

		font = eval('notsolaserdata.' + str('notsolasercoord'))
		
		w = 0  #Initial spacing offset
		spacing = 9  # 3.75 spacing between letters

		letterVals = [ord(q) - 32 for q in self.options.text] 
		for q in letterVals:
			if (q <= 0) or (q > 95):
				w += 2*spacing
			else:
				w = draw_svg_text(q, font, w, 0, g)
				OutputGenerated = True
		t = 'translate(' + str(self.view_center[0] - w/2) + ',' + str(self.view_center[1]) + ')'
		g.set( 'transform',t)

		if not OutputGenerated:
			self.current_layer.remove(g)	#remove empty group, if no SVG was generated.

if __name__ == '__main__':
	e = notsolaser()
	e.affect()