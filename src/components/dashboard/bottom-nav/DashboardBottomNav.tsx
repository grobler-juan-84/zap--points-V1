import { ViewSwitchButton } from '../buttons/ViewSwitchButton'
import { SortingButton } from '../buttons/SortingButton'
import { MultiSelectButton } from '../buttons/MultiSelectButton'
import { AttendanceButton } from '../buttons/AttendanceButton'
import { RandomStudentButton } from '../buttons/RandomStudentButton'
import { TimerButton } from '../buttons/TimerButton'
import { BellsButton } from '../buttons/BellsButton'
import { HappyMeterButton } from '../buttons/HappyMeterButton'
import { SettingsButton } from '../buttons/SettingsButton'


export function DashboardBottomNav() {
    function handleViewSwitch() {
        console.log('View switch button clicked')
    }
    function handleSorting() {
        console.log('Sorting button clicked')
    }
    function handleMultiSelect() {
        console.log('Multi select button clicked')
    }
    function handleAttendance() {
        console.log('Attendance button clicked')
    }
    function handleRandomStudent() {
        console.log('Random student button clicked')
    }
    function handleTimer() {
        console.log('Timer button clicked')
    }
    function handleBells() {
        console.log('Bells button clicked')
    }
    function handleHappyMeter() {
        console.log('Happy meter button clicked')
    }
    function handleSettings() {
        console.log('Settings button clicked')
    }
    return (
        <div className="flex flex-row items-center justify-start bg-white w-full h-15 gap-4 px-4">
            <ViewSwitchButton onClick={handleViewSwitch} />
            <SortingButton onClick={handleSorting} />
            <MultiSelectButton onClick={handleMultiSelect} />
            <AttendanceButton onClick={handleAttendance} />
            <RandomStudentButton onClick={handleRandomStudent} />
            <TimerButton onClick={handleTimer} />
            <BellsButton onClick={handleBells} />
            <HappyMeterButton onClick={handleHappyMeter} />
            <SettingsButton onClick={handleSettings} />
        </div>
    )
}