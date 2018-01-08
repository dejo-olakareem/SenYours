# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180107222329) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "senior_id"
    t.integer "companion_id"
    t.time "start_time"
    t.time "end_time"
    t.date "start_date"
    t.date "end_date"
    t.integer "fee"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "accept"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.bigint "phone_number"
    t.string "password_digest"
    t.integer "zipcode"
    t.string "state"
    t.string "city"
    t.string "address"
    t.integer "ssn"
    t.integer "fee"
    t.text "description"
    t.string "avatar"
    t.string "verification_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "availability"
    t.string "identification"
    t.integer "age"
    t.string "age_range"
  end

end
