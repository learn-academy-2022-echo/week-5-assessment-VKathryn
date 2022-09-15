# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# write code that iterates through an array looking for words containing a value, if the word contains the value, return the word in a new array

# Create a function named drink_finder that takes in two values, create a variable that creates an array that will contain the logic that filters through the input, and returns only values that contain the second value provided. 

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# beverages_array.select { |item| item.include? (letter_o)} 
     

def drink_finder = item.select do |item, letter|
     item.include? (letter)
end
# end
def drink_finder (item, letter)
     letter_array = item.filter do |value|
               value.include? (letter)
          end
     letter_array
end

p drink_finder(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# p us_states.values
# [["Washington", "Oregon", "Idaho"], ["California", "Arizona", "Nevada"], ["Maine", "New Hampshire", "Vermont"]]

# p us_states.values.flatten
# ["Washington", "Oregon", "Idaho", "California", "Arizona", "Nevada", "Maine", "New Hampshire", "Vermont"]


# p us_states.values.flatten.sort
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]

def state_sort hash
     hash.values.flatten.sort 
 end
 
 p state_sort(us_states)

# I know .flatten is needed to eliminate the nested array issue, but I'm not sure where it goes yet. 

# new_array = [us_states.map {|x| x.values_at}]
# prints nothing in terminal

# new_array = [us_states.map {|x| x.values}]
# "prints: 43:in `block in <main>': undefined method `values' for [:northwest, ["Washington", "Oregon", "Idaho"]]:Array (NoMethodError)
# Did you mean?  values_at"

# p us_states.map {|x| x.values_at}
# prints: '[[], [], []]'

# p us_states.map {|x| x.values}
# prints: '43:in `block in <main>': undefined method `values''

# states_values = (us_states.map {|states| [states["northwest"], states["southwest"], states["northeast"]]})
# p states_values
# prints: ':43:in `[]': no implicit conversion of String into Integer'

# puts "Array flatten implementation."
# # print us_states.flatten
# prints: '[:northwest, ["Washington", "Oregon", "Idaho"], :southwest, ["California", "Arizona", "Nevada"], :northeast, ["Maine", "New Hampshire", "Vermont"]]%  '


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Class Bike
#      def initialize(model, wheels, speed)
#          @model = model
#          @wheels = wheels
#          @speed = speed

#          puts "The #@model bike has #@wheels and is going #@speed mph"
#      end
# end

# trek = Bike.new("Trek", "2", "0")

class Bike
     def initialize(model)
         @model = model
         @wheels = 2
         @speed = 0 
     end
         
     def bike_info 
        puts "The #@model bike has #@wheels wheels and is going #@speed mph."
     end

end

trek = Bike.new("Trek")
trek.bike_info

# The Trek bike has 2 wheels and is going 0 mph. < Returns correctly!

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
     attr_accessor :model, :wheels, :speed
      def initialize(model)
          @model = model
          @wheels = 2
          @speed = 0 
      end
          
      def bike_info 
         puts "The #@model bike has #@wheels wheels and is going #@speed mph."
      end
 
      def pedal_faster(number)
         @speed += number
      end
      def brake(number)
         if ((@speed - number) >= 0)
             @speed -= number  
         else 
             @speed = 0
         end  
      end
 end
 
 
 
 trek = Bike.new("Trek")
 trek.bike_info
 trek.pedal_faster(2)
 trek.bike_info
 trek.pedal_faster(5)
 trek.bike_info
 trek.brake(12)
 trek.bike_info

 # PC Brake subtracts a number from speed. Speed needs to have a floor of 0. if speed equals less than 0 return 0 
