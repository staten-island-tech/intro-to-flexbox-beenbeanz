---

# Problem 1 — Amusement Park Ride 🎢

**Scenario:** A rider may board if they are tall enough **OR** with an adult, and they are **not** on a health hold.

**Variables**

* `rideHeightOK` — tall enough (true/false)
* `withAdult` — riding with an adult (true/false)
* `healthHold` — health restriction flagged (true/false)

**Condition (Boolean Expression)**

```
canRide = (rideHeightOK OR withAdult) AND (NOT healthHold)
```

**JavaScript form:**

```js
const canRide = (rideHeightOK || withAdult) && !healthHold;
```


### 📝 Student Template (Blank)

| rideHeightOK | withAdult | healthHold | (rideHeightOK OR withAdult) | NOT healthHold | canRide |
| ------------ | --------- | ---------- | --------------------------- | -------------- | ------- |
| true         | true      | true       |                             |                |         |
| true         | true      | false      |                             |                |         |
| true         | false     | true       |                             |                |         |
| true         | false     | false      |                             |                |         |
| false        | true      | true       |                             |                |         |
| false        | true      | false      |                             |                |         |
| false        | false     | true       |                             |                |         |
| false        | false     | false      |                             |                |         |

---

# Problem 2 — House Alarm 🚪🪟

**Scenario:** The alarm is **silent** only when **neither** the door **nor** the window is open. (This demonstrates **De Morgan’s Law**.)

**Variables**

* `doorOpen` — front door open (true/false)
* `windowOpen` — window open (true/false)

**Condition (Boolean Expression)**

```
alarmSilent = NOT (doorOpen OR windowOpen)
```

**JavaScript form:**

```js
const alarmSilent = !(doorOpen || windowOpen);
// Equivalent by De Morgan: (!doorOpen && !windowOpen)
```

              |

### 📝 Student Template (Blank)

| doorOpen | windowOpen | (doorOpen OR windowOpen) | NOT(...) = alarmSilent |
| -------- | ---------- | ------------------------ | ---------------------- |
| true     | true       |                          |                        |
| true     | false      |                          |                        |
| false    | true       |                          |                        |
| false    | false      |                          |                        |

---