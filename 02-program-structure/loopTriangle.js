/* 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
 */

for (let hashes = '#'; hashes.length <= 7; hashes += '#') {
  console.log(hashes);
}
